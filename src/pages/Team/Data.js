const bio = bio => {
    switch (bio) {
        case "Justin":
            return ("B.S. in Computer Science. Currently working on his Masters in C.S. from Worcester Polytechnic Institute. Self-taught programmer and designer with ten years of software development experience. CyberCorps SFS scholarship award winner.");
        case "Jon":
            return ('B.S. in Computer Science with an Associates Degrees in Information Technology and Computer Studies. Currently working on his Masters in C.S. from Worcester Polytechnic Institute. CyberCorps SFS scholarship award winner. ');
        case "Brian":
            return ('B.S. in Computer Science. Currently working on his Masters in C.S. from Worcester Polytechnic Institute. First recipient of the CyberCorps SFS scholarship award funded by NSF.');
        case "Humberto":
            return ('B.S. in Computer Science. Currently working on his Masters in C.S. from Worcester Polytechnic Institute. Also a recipient of the CyberCorps Scholarship for Service program.');     
        case "Anthony":
            return ('B.S. in Computer Information Systems. Pursuing an MPA with a Cyber Security Certificate from the University of Rhode Island. Help Desk Technician for The Kraft Group.');   
        case "Yimeng":
            return('Graphic Design B.F.A student attending Rhode Island School of Design (class of 2023). Currently studying abroad in Rome. Has experience working on the city’s cultural-tourist advertisement and visual identity systems. ');
        case "Nuo":
            return('B.F.A in Graphic Design at Rhode Island School of Design. Currently pursuing M.F.A in Design at University of Southern California. 58th GDUSA, American Graphic Design Award Winner.')               
        default:
          return "Thinkr Member";
      }
  }

export const headerObject = {
    headerColor: 'green',
    headerTitleText: 'About Us',
    headerBodyText: 'The team behind Thinkr wants to do more than just give a single person a scholarship. We want to create a community of like-minded individuals that know the importance of hard work and dedication. We believe education is a human right and our goal is to empower students with opportunities in higher education. Thinkr’s mission is to provide students with a scholarship and stipend to relieve the financial burden higher education can thrust upon them. Four of the original five team members were awarded the National Science Foundation’s CyberCorps Scholarship for Service award and are attending graduate school for free because of it. We want to do our part to give more people around the country an opportunity similar to our founders, but with less strings attached.'
}

export const dividerObject = {
    dividerColor: 'green'
}

export const teamObjOne = {
    headerTitleText: 'Meet Our Team',
    twitterlogo: require('../../images/twitterNonHov.png'),
    thinkrLogo: require('../../images/cubeLogo.png'),
    member1Pic: require('../../images/JustinPic.png'),
    member2Pic: require('../../images/JonDuranPic.png'),
    member3Pic: require('../../images/BrianPic.png'),
    member4Pic: require('../../images/HumbertoPic.png'),
    member5Pic: require('../../images/AnthonyPic.png'),
    member7Pic: require("../../images/YimengPic.png"),
    member8Pic: require('../../images/NuoPic.png'),
    bio1: bio("Justin"),
    bio2: bio("Jon"),
    bio3: bio("Brian"),
    bio4: bio("Humberto"),
    bio5: bio("Anthony"),
    bio7: bio("Yimeng"),
    bio8: bio("Nuo"),
    //bio7:

};
