---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% comment %}

Sim-2-real DRL Controller Design for FCEV with Terrain Preview (Apr 2025 – Now)
======================================================================
This project focuses on developing a deep reinforcement learning–based controller that leverages terrain preview to optimize fuel‐cell and battery usage in fuel cell electric vehicles (FCEVs). The goal is to reduce hydrogen consumption while maintaining battery SOC within safe operating limits.

- Developed a DDPG-based control policy that uses terrain preview to proactively balance fuel-cell and battery power, minimizing hydrogen consumption while keeping battery SOC within safe limits.
- Generated H₂-vs-SOC maps across standard drive cycles and real-world conditions to guide training and validate against hardware-in-the-loop tests.
- Early results show a 10–15% reduction in hydrogen use versus no-preview strategies; ongoing work focuses on transferring the learned policy from simulation to a prototype testbed.



PI-emulating MPC controller design for Wave Energy Converters (WECs) (Jun 2022 – Apr 2025)
======================================================================
Efficient control is critical for maximizing energy capture from ocean waves. This project explores a feedback-tuned Model Predictive Control (MPC) framework for WECs, using LMI-based tuning for optimal performance.

- Developed a linear feedback controller and used impedance matching for gain optimization.
- Designed a constrained pseudo-PI/MPC controller, reaching < 1 % tracking error and PID-like DC gain via linear-matrix-inequality (LMI) tuning.  
- Integrated an LSTM sea-state predictor for real-time gain scheduling, boosting captured power under changing wave conditions.


![image](https://user-images.githubusercontent.com/116129150/236619888-93a3d6de-dc19-4d46-8510-02fbf1dbf64f.png)


Linear PTO for tractor-trailer suspension system (Jan 2023 – Jun 2024)
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


AI Based Prognostics and Health Management of BLDC Motors (Sep 2018 – May 2021)
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
{% endcomment %}

Research Overview
================

## PI-Emulating MPC via Neural Network-based Sea-State Prediction

<table>
<tr>
<td width="40%">

<img src="https://tashifat.github.io/images/pi2mpcNN.png" alt="Research Overview" width="100%"/>

</td>
<td width="60%" markdown="1">

Can we predict the sea state using only on-board WEC motion and PTO measurements so that the controller can adapt in real time?

We train a neural network to infer wave parameters and excitation force online, enabling PI/MPC retuning without any external sensors.

MATLAB–Python co-simulation shows that this adaptive strategy can boost absorbed power by ~10–30% compared to fixed-gain control under changing sea conditions.

Publications: [Energies (2025)](https://www.mdpi.com/2076-3417/15/10/5772), [IFAC-CAMS (2024)](https://www.sciencedirect.com/science/article/pii/S240589632401841X), [UMERC (2025)](https://umerc-us.org/events/110075)


</td>
</tr>
</table>

## Electro-Mechanical Co-Design for Energy Harvesting in Heavy-Duty Truck Suspensions

<table>
<tr>
<td width="40%">

<img src="https://tashifat.github.io/images/conmet.png" alt="Research Overview" width="100%"/>

</td>
<td width="60%" markdown="1">

What if every bump charged the battery? Can we harvest meaningful electrical energy from the suspension motion of electric semi-trucks as they drive over real roads?

We model the full truck dynamics and PTO in an electro-mechanical co-design framework, simulate diverse road profiles to quantify harvesting potential, and optimize the system to maximize energy capture while maintaining ride comfort and vehicle safety.


Publications: IEEE TEC (Under Review)

</td>
</tr>
</table>

## AI-based Prognostics and Health Management of Electric Drives

<table>
<tr>
<td width="40%">

<img src="https://tashifat.github.io/images/bldc.jpeg" alt="Research Overview" width="100%"/>

</td>
<td width="60%" markdown="1">

We developed an AI-based prognostics and health management framework for BLDC motors that continuously monitors vibration, temperature, current, and voltage under accelerated life testing to detect degradation early. Major contributions are:

1. Developed an NI-LabVIEW test rig for accelerated life testing, logging vibration, current, voltage, temperature, and speed.
2. Introduced a 3rd-harmonic current feature-selection technique, improving fault-diagnosis accuracy by 10 % over conventional methods.
3. Developed a remaining useful life estimation framework using machine learning to enable post-fault decision making.

Publications: [IEEE Access (2020)](https://ieeexplore.ieee.org/document/9110877), [IEEE Access (2021)](https://ieeexplore.ieee.org/abstract/document/9193968), [IEEE Sensors Journal (2022)](https://ieeexplore.ieee.org/abstract/document/9758819)


</td>
</tr>
</table>
