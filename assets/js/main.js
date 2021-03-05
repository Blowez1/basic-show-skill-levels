const skills = document.querySelectorAll(".skills .skill-item .skill");

skills.forEach(skill => {
    const skillLevel = skill.getAttribute('skill-level');

    var skillLevelEl = document.createElement("SPAN");
    skillLevelEl.setAttribute("class", "skill-level");
    var skillLevelElText = document.createTextNode("%" + skillLevel);

    skillLevelEl.appendChild(skillLevelElText);
    skill.appendChild(skillLevelEl);
    skill.style.width = skillLevel + "%";
});