/**
 * Student Controller
 */

async function getStudent(req, res, next) {
  try {

    res.status(200).json({
      name: "Andrej Kudriavcev",
      studentId: "224939307"
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getStudent,
}