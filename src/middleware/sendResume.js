import resume from "../../resumes/Soroush_Saberan.pdf";

export const sendResume = (req, res) => {
   res.send(resume);
};
