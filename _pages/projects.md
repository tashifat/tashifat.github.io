---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---


Sim-2-real DRL Controller Design for FCEV with Terrain Preview (Apr 2025 – Now)
======================================================================
This project focuses on developing a deep reinforcement learning–based controller that leverages terrain preview to optimize fuel‐cell and battery usage in fuel cell electric vehicles (FCEVs). The goal is to reduce hydrogen consumption while maintaining battery SOC within safe operating limits.

- Developed a DDPG-based control policy that uses terrain preview to proactively balance fuel-cell and battery power, minimizing hydrogen consumption while keeping battery SOC within safe limits.
- Generated H₂-vs-SOC maps across standard drive cycles and real-world conditions to guide training and validate against hardware-in-the-loop tests.
- Early results show a 10–15% reduction in hydrogen use versus no-preview strategies; ongoing work focuses on transferring the learned policy from simulation to a prototype testbed.



PI-emulating MPC controller design for Wave Energy Converters (WECs)
======================================================================
Efficient control is critical for maximizing energy capture from ocean waves. This project explores a feedback-tuned Model Predictive Control (MPC) framework for WECs, using LMI-based tuning for optimal performance.

- Developed a linear feedback controller and used impedance matching for gain optimization.
- Designed a constrained pseudo-PI/MPC controller, reaching < 1 % tracking error and PID-like DC gain via linear-matrix-inequality (LMI) tuning.  
- Integrated an LSTM sea-state predictor for real-time gain scheduling, boosting captured power under changing wave conditions.


![image](https://user-images.githubusercontent.com/116129150/236619888-93a3d6de-dc19-4d46-8510-02fbf1dbf64f.png)


Linear PTO for tractor-trailer suspension system
======================================================================
As part of my recent work, I have focused on the development of a Linear PTO for a tractor-trailer suspension system. One of the key challenges in this project was understanding the relative movement between the Chassis and Cab of a Class 8 Commercial Tractor. To address this, I demonstrated and formulated the relative movement to better understand the system and optimize the energy extraction process. Key contributions are:

- Built a hardware prototype linear generator; measured ~80 % energy-conversion ratio across representative road profiles.  
- Modeled chassis–cab relative motion and showed up to 8 kW extractable power in Class-8 operating envelopes.


![cab (1)](https://user-images.githubusercontent.com/116129150/236620105-5971ae00-2441-44cb-b70f-4bd064b451fa.png)

<!---
Supercapacitors for Pulsed Power Application
======================================================================
As part of my work in the field of energy storage, I have been involved in the design and development of a supercapacitor-based system for pulsed power applications. Specifically, I focused on developing a 1 kW prototype for marine controlled source electromagnetic (MCSEM) using DC/DC converters and supercapacitors. In order to achieve high power output, I outlined a supercapacitor module controlled by a dual active bridge (DAB) converter. Additionally, I designed an active front end for the energy storage system, allowing for 3-Ph AC power to be converted to DC output. To effectively control the generator, I implemented a d-q current control framework. Through these efforts, I was able to develop a highly efficient and effective energy storage system that can be used for a wide range of pulsed power applications. This work has the potential to significantly impact the field of energy storage, improving the reliability and efficiency of pulsed power systems in a variety of industries.
-->


AI Based Prognostics and Health Management of BLDC Motors 
==========================================================

Unexpected machine failures can lead to system-wide shutdowns, reduced output, and safety risks. To mitigate this, we developed a prognostics and health management (PHM) framework for brushless DC (BLDC) motors using multi-sensor data and machine learning techniques. The system continuously monitors degradation patterns by analyzing vibration, temperature, current, and voltage signals collected under accelerated life testing. Key contributions are:

- Developed an NI-LabVIEW test rig for accelerated life testing, logging vibration, current, voltage, temperature, and speed.  
- Introduced a 3rd-harmonic current feature-selection technique, improving fault-diagnosis accuracy by 10 % over conventional methods.

![image](https://user-images.githubusercontent.com/116129150/236619701-a2e81274-69b5-439b-a753-0f2bf98d5db1.png)


<!---
Reliability Analysis of Multi-GPU PSU System 
==========================================================

Prognostics and health management (PHM) has become a fundamental element of engineering systems for ensuring improved system reliability and productivity. With increasing demand, machines are functioning in more complex environment with intricate operating conditions. A failure in a machine can cause an unexpected shutdown of the entire system, reduction in output, loss of human and environmental resources. Therefore, health monitoring of a system is a foremost necessity to avoid catastrophic failures and maximize the output. In this study, we investigate several electrical and mechanical faults of permanent magnet brushless DC (BLDC) motor by monitoring multiple sensor data collected from different experiments. Degradation pattern of motor health was continuously monitored by analyzing several sensor data such as-vibration, temperature, current and voltage data.

![image](https://user-images.githubusercontent.com/116129150/236619710-7a231c35-bce4-41a6-bc9c-d3c913d0b0c4.png)
-->
