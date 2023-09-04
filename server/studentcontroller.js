const Student = require("./studentmodal");
const {transporter,mailOptions }= require("./nodemailer")

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (error) {
    res.staus(500).json({ msg: error });
  }
};

const newStudent = async (req, res) => {
  try {
    const response = await Student.create(req.body);
    try {
      await transporter.sendMail({
        from: "gitty690@gmail.com",
        to: `${response.email}`,
        subject: "Your customized SOP report",
        text: 
        `Thank you for using our customized sop generator. Here is your generated SOP based on the details you entered in the form
        From
        ${response.name}
        ${response.email}
        
        To
        Visa Officer
        High Commission of Canada
        Subject: Statement of Purpose for studying in Canada
        
        Dear Sir/Madam,
        
        I would like to take this opportunity to introduce myself as ${response.name}, a passionate individual with a strong desire to pursue higher education in Canada. I am writing this statement of purpose to express my interest in the ${response.caprog} program at ${response.cainst}.
        
        Having completed my ${response.highestedu} in Engineering from ${response.highestinst}, I have gained a solid foundation in technical knowledge and problem-solving skills. However, I believe that pursuing a Masters degree in Canada will provide me with the opportunity to further enhance my expertise and broaden my horizons in the field of my interest.
        
        The Masters program at the ${response.cainst} is highly regarded for its interdisciplinary approach, which aligns perfectly with my academic and professional goals. I am particularly drawn to the program's emphasis on practical application and comprehensive understanding of key concepts. By studying and collaborating with experienced faculty members and utilizing the state-of-the-art facilities at the ${response.cainst}, I am confident that I will be able to acquire the necessary skills and knowledge to excel in my chosen field.
        
        Furthermore, the program's focus on research and innovation will enable me to contribute to the advancement of my field and make a meaningful impact in the industry. ${response.cainst}'s reputation for academic excellence and its strong network of industry connections will provide me with valuable opportunities for internships and research collaborations, further enhancing my learning experience.
        
        Canada, with its world-class education system and multicultural environment, is the ideal destination for international students like me. The country's commitment to providing a safe and inclusive learning environment, along with its excellent healthcare facilities, gives me the assurance that I will be well-supported throughout my academic journey.
        
        Studying in Canada will not only provide me with a high-quality education but also expose me to diverse cultures and perspectives. Interacting with students from different backgrounds will enhance my communication and interpersonal skills, preparing me to thrive in a globalized workforce.
        
        Upon completion of my Masters program, my goal is to utilize the knowledge and skills acquired in Canada to contribute to the development of my home country, ${response.country}. I aim to apply my expertise in the relevant industry and contribute to its growth and innovation. By returning to  ${response.country}, I will have the opportunity to share my experiences and contribute to the advancement of my country's economy and society.
        
        In terms of finances, ${response.fyrfee?`I have already paid the first year's tuition fee of ${response.fee} CAD`:"i haven't paid my first year's tution fee"} and ${response.gic ?`have a Guaranteed Investment Certificate (GIC) of ${response.gicfee} CAD to cover my living expenses`:"i dont have any Guaranteed Investment Certificate (GIC)"}. Additionally, my family is fully supportive of my education and will provide financial assistance as needed.
        
        Dear Madam/Sir, I assure you that if granted the opportunity to study in Canada, I will adhere to all rules and regulations set by the Canadian government, local authorities, and the University of Toronto. I am confident that my academic background, language proficiency, and financial stability make me a suitable candidate for a study visa.
        
        I kindly request you to process my visa application at your earliest convenience. I am grateful for your time and consideration in reviewing my application.
        
        Sincerely,
        
        ${response.name}
        `,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
    res.status(201).json({ response });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllStudents,
  newStudent,
};
