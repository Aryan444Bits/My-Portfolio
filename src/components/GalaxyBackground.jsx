import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalaxyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 3;

    /**
     * Galaxy Generator
     */
    const isMobile = window.innerWidth < 768;
    const parameters = {
      count: isMobile ? 50000 : 100000, // Reduce count on mobile for performance
      size: isMobile ? 0.015 : 0.01,   // Larger particles on smaller screens
      radius: 5,
      branches: 3,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984'
    };

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);

      const colorInside = new THREE.Color(parameters.insideColor);
      const colorOutside = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * parameters.radius;
        const spinAngle = radius * parameters.spin;
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

        positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        // Color
        const mixedColor = colorInside.clone();
        mixedColor.learn(colorOutside, radius / parameters.radius);

        colors[i3 + 0] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    // Fix learn typo (lerp)
    THREE.Color.prototype.learn = THREE.Color.prototype.lerp;

    generateGalaxy();

    // Initial state for expansion effect - adjusted to be less compressed
    points.scale.set(0.6, 0.6, 0.6);
    points.rotation.x = Math.PI * 0.1;

    /**
     * Animation and Scroll Integration
     */
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Constant slow rotation background - clockwise
      points.rotation.y -= 0.001;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();

    // GSAP Scroll Animations - Expansion Effect
    gsap.to(points.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Increased scrub for smoother follow
      }
    });

    gsap.to(points.rotation, {
      x: Math.PI * 0.4,
      y: "-=6.28", // Full 360 degree rotation
      ease: "none",
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2, // Smooth interpolation
      }
    });

    gsap.to(camera.position, {
      z: 6,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    // Background color transition
    gsap.to('body', {
      backgroundColor: '#05051a',
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, 
        backgroundColor: '#000000',
        pointerEvents: 'none' 
      }} 
    />
  );
};

export default GalaxyBackground;
