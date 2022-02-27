const bio = bio => {
    switch (bio) {
        case "Justin":
            return ("Bio: B.S in Computer Science, currently\
                    working on Graduate Degree in Computer Science from\
                    Worcester Polytechnic Institute. Self-taught\
                    programmer/designer with 10 years of\
                    experience developing software. SFS scholarship award winner.");
        case "Jon":
            return ('Bio: Jonathan is currently working\
                    on his MS in Computer Science from\
                    Worcester Polytechnic Institute.\
                    He currently holds a BS\
                    in Computer Science and two AS degrees\
                    in Information Technology & Computer Studies.');
        case "Brian":
            return ('Bio: B.S. in Computer Science,\
                    is currently working in his final\
                    semester as a Computer Science\
                    Graduate Student at Worcester\
                    Polytechnic Institute and was the\
                    first to receive the in CyberCorps SFS\
                    scholarship award funded by NIST.');
        case "Humberto":
            return ('Bio: B.S. in Computer Science, is currently working on his M.S. in Computer Science at Worcester Polytechnic Insitutute. Humberto is also apart of the CyberCorps Scholarship for Serivce program.');     
        case "Anthony":
            return ('Bio: Help Desk Technician for The Kraft Group. Computer Information Systems B.S. from Rhode Island College. MPA Student with a Cyber Security Certificate from the University of Rhode Island.');                  
        default:
          return "Thinkr Member";
      }
  }

export const headerObject = {
    headerColor: 'green',
    headerTitleText: 'About Us',
    headerBodyText: 'The team behind Thinkr wants to do more than just give an individual a scholarship. We want to create a community of like-minded individuals that know the importance of hard work and dedication. We believe education is a human right, Our goal is to empower students with opportunities in higher education. The core mission at Thinkr today is to provide students with a scholarship and stipend to lift the financial burden higher education can impose on them. Four of the original five team members were awarded the National Institute of Science and Technologies CyberCorps: Scholarship for Service and are attending graduate school for free because of it. We want to do our part to give more people around the country an opportunity similar to our founders, but with less strings attached.'
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
    bio1: bio("Justin"),
    bio2: bio("Jon"),
    bio3: bio("Brian"),
    bio4: bio("Humberto"),
    bio5: bio("Anthony")
    //bio6:

};
