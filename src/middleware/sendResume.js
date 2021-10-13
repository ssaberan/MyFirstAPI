import * as fs from "fs";

export const sendResume = (req, res) => {
   const resume = fs.readFileSync("./resumes/resumeV1.txt").toString();
   res.json({ resume });
};
