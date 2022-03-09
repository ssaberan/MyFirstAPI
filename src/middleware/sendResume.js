import * as fs from "fs";

export const sendResume = (req, res) => {
   const resume = fs.readFileSync("./data/resume.txt").toString();
   res.json({ resume });
};
