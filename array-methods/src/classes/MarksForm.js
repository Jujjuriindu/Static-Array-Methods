class MarksForm {
    static passMarks =35;
    static tenthMarks=()=>{
        console.log("Regular Tenth Examination");
    }
    constructor() {
        console.log("Tenth Marks Memo");
        this.englishMarks = 0;
        this.teluguMarks = 0;   
        this.hindiMarks = 0;
        this.mathsMarks = 0;
        this.scienceMarks = 0;
        this.socialMarks = 0;
    }
    calculateMarks=()=>{
        if(this.englishMarks >= MarksForm.passMarks && this.teluguMarks >= MarksForm.passMarks && this.hindiMarks >= MarksForm.passMarks && this.mathsMarks >= MarksForm.passMarks && this.scienceMarks >= MarksForm.passMarks && this.socialMarks >= MarksForm.passMarks){
            console.log("Passed in the Subjects");
        }
        else{
            console.log("Failed in the Subjects");
        }
    }
}

export default MarksForm;