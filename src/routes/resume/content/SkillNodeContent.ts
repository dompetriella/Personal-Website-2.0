export const maxSkillNodes = 7;

const perfect = maxSkillNodes - 0;
const excellent = maxSkillNodes - 1;
const good = maxSkillNodes - 2;
const decent = maxSkillNodes - 3

export const skillNodeContent: Array<any> = [
    {
        title: "HTML / CSS / JS",
        filledNodes: perfect
    },
    {
        title: "C#",
        filledNodes: excellent
    },
    {
        title: "Dart / Flutter",
        filledNodes: perfect
    },
    {
        title: "Figma / Rive",
        filledNodes: good
    },
]