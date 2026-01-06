// @desc Get goal
// @route Get/api/goals
// @access Private
const getGoals = (req,res) =>{
        res.status(200).json({ message: 'get goals'})
}

// @desc Get goal
// @route post/api/goals
// @access Private
const setGoal = (req, res) => {
       if (!req.body.text){
         res.status(400).json({ message:'Plaease add a text field'})
        }
        
        res.status(200).json({ message: 'Set goals'})
}

// @desc update goal
// @route put/api/goals/:id
// @access Private
const updateGoal = (req,res) =>{
       res.status(200).json({ message: `update goals ${req.params.id}`})
}

// @desc Delete goal
// @route delete/api/goals/:id
// @access Private
const deleteGoal = (req,res) =>{
   res.status(200).json({ message: `delete goals ${req.params.id}`})
}


module.exports = {
 getGoals,
 setGoal,
 updateGoal,
 deleteGoal,

}

// 22min