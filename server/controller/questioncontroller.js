import Question from "../model/questions";
export const getquestions = async (req, res, next) =>{
    const reference = req.params.reference;
    try {
        const questions = await Question.find({reference: reference});
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}