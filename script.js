const chapters = [
    { name: "Chapter 1: Units, Physical Quantities, and Vectors", file: "Chapter_1_Units_Physical_Quantities_and_Vectors.pdf" },
    { name: "Chapter 2: Motion Along a Straight Line", file: "Chapter_2_Motion_Along_a_Straight_Line.pdf" },
    { name: "Chapter 3: Motion in Two or Three Dimensions", file: "Chapter_3_Motion_in_Two_or_Three_Dimensions.pdf" },
    { name: "Chapter 4: Newton's Laws of Motion", file: "Chapter_4_Newtons_Laws_of_Motion.pdf" },
    { name: "Chapter 5: Applying Newton's Laws", file: "Chapter_5_Applying_Newtons_Laws.pdf" },
    { name: "Chapter 6: Work and Kinetic Energy", file: "Chapter_6_Work_and_Kinetic_Energy.pdf" },
    { name: "Chapter 7: Potential Energy and Energy Conservation", file: "Chapter_7_Potential_Energy_and_Energy_Conservation.pdf" },
    { name: "Chapter 8: Momentum, Impulse, and Collisions", file: "Chapter_8_Momentum_Impulse_and_Collisions.pdf" },
    { name: "Chapter 9: Rotation of Rigid Bodies", file: "Chapter_9_Rotation_of_Rigid_Bodies.pdf" },
    { name: "Chapter 10: Dynamics of Rotational Motion", file: "Chapter_10_Dynamics_of_Rotational_Motion.pdf" },
    { name: "Chapter 11: Equilibrium and Elasticity", file: "Chapter_11_Equilibrium_and_Elasticity.pdf" },
    { name: "Chapter 12: Fluid Mechanics", file: "Chapter_12_Fluid_Mechanics.pdf" },
    { name: "Chapter 13: Gravitation", file: "Chapter_13_Gravitation.pdf" },
    { name: "Chapter 14: Periodic Motion", file: "Chapter_14_Periodic_Motion.pdf" },
    { name: "Chapter 15: Mechanical Waves", file: "Chapter_15_Mechanical_Waves.pdf" },
    { name: "Chapter 16: Sound and Hearing", file: "Chapter_16_Sound_and_Hearing.pdf" },
    { name: "Chapter 17: Temperature and Heat", file: "Chapter_17_Temperature_and_Heat.pdf" },
    { name: "Chapter 18: Thermal Properties of Matter", file: "Chapter_18_Thermal_Properties_of_Matter.pdf" },
    { name: "Chapter 19: The First Law of Thermodynamics", file: "Chapter_19_The_First_Law_of_Thermodynamics.pdf" },
    { name: "Chapter 20: The Second Law of Thermodynamics", file: "Chapter_20_The_Second_Law_of_Thermodynamics.pdf" },
    { name: "Chapter 21: Electric Charge and Electric Field", file: "Chapter_21_Electric_Charge_and_Electric_Field.pdf" },
    { name: "Chapter 22: Gauss's Law", file: "Chapter_22_Gausss_Law.pdf" },
    { name: "Chapter 23: Electric Potential", file: "Chapter_23_Electric_Potential.pdf" },
    { name: "Chapter 24: Capacitance and Dielectrics", file: "Chapter_24_Capacitance_and_Dielectrics.pdf" },
    { name: "Chapter 25: Current, Resistance, and Electromotive Force", file: "Chapter_25_Current_Resistance_and_Electromotive_Force.pdf" },
    { name: "Chapter 26: Direct-Current Circuits", file: "Chapter_26_Direct-Current_Circuits.pdf" },
    { name: "Chapter 27: Magnetic Field and Magnetic Forces", file: "Chapter_27_Magnetic_Field_and_Magnetic_Forces.pdf" },
    { name: "Chapter 28: Sources of Magnetic Field", file: "Chapter_28_Sources_of_Magnetic_Field.pdf" },
    { name: "Chapter 29: Electromagnetic Induction", file: "Chapter_29_Electromagnetic_Induction.pdf" },
    { name: "Chapter 30: Inductance", file: "Chapter_30_Inductance.pdf" },
    { name: "Chapter 31: Alternating Current", file: "Chapter_31_Alternating_Current.pdf" },
    { name: "Chapter 32: Electromagnetic Waves", file: "Chapter_32_Electromagnetic_Waves.pdf" },
    { name: "Chapter 33: The Nature and Propagation of Light", file: "Chapter_33_The_Nature_and_Propagation_of_Light.pdf" },
    { name: "Chapter 34: Geometric Optics", file: "Chapter_34_Geometric_Optics.pdf" },
    { name: "Chapter 35: Interference", file: "Chapter_35_Interference.pdf" },
    { name: "Chapter 36: Diffraction", file: "Chapter_36_Diffraction.pdf" },
    { name: "Chapter 37: Relativity", file: "Chapter_37_Relativity.pdf" },
    { name: "Chapter 38: Photons: Light Waves Behaving as Particles", file: "Chapter_38_Photons_Light_Waves_Behaving_as_Particles.pdf" },
    { name: "Chapter 39: Particles Behaving as Waves", file: "Chapter_39_Particles_Behaving_as_Waves.pdf" },
    { name: "Chapter 40: Quantum Mechanics", file: "Chapter_40_Quantum_Mechanics.pdf" },
    { name: "Chapter 41: Atomic Structure", file: "Chapter_41_Atomic_Structure.pdf" },
    { name: "Chapter 42: Molecules and Condensed Matter", file: "Chapter_42_Molecules_and_Condensed_Matter.pdf" },
    { name: "Chapter 43: Nuclear Physics", file: "Chapter_43_Nuclear_Physics.pdf" },
    { name: "Chapter 44: Particle Physics and Cosmology", file: "Chapter_44_Particle_Physics_and_Cosmology.pdf" },
];

const buttonContainer = document.getElementById("chapter-buttons");

chapters.forEach(chapter => {
    const button = document.createElement("button");
    button.className = "chapter-button";
    button.textContent = chapter.name;
    button.addEventListener("click", () => {
        const filePath = `Chapters/${chapter.file}`;
        const link = document.createElement("a");
        link.href = filePath;
        link.download = chapter.file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    buttonContainer.appendChild(button);
});