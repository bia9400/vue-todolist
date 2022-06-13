new Vue({
    el: "#app",
    data: {
        selected: "",
        products: [
            { id: 1, name: 'Viaggio' },
            { id: 2, name: 'Spesa' },
            { id: 3, name: 'Portfolio' },

        ],
        plusButtonClicked: false,
        userText:"",
        arrayData: [
            {
                taskType: "Viaggio",
                taskChecked: false,
                taskText: "Comprare scarpe a Bali",
            },
            {
                taskType: "Viaggio",
                taskChecked: false,
                taskText: "Fare Paracadute",
            },
            {
                taskType: "Spesa",
                taskChecked: false,
                taskText: "Comprare le gocciole",
            }
        ],
    },
    methods: {
        plusClick() {
            this.plusButtonClicked = true
        },
       /*  filterTrip() {
            let x = this.arrayData.filter(student => student.taskType == "Viaggio")
            
            return x
        },
        filterSpesa(){
            let x = this.arrayData.filter(student => student.taskType == "Spesa")
            
            return x
        },
        filterPortfolio(){
            let x = this.arrayData.filter(student => student.taskType == "Portfolio")
            
            return x
        }, */
        checkboxControl(index){
            if(this.arrayData[index].taskChecked==false)
            {this.arrayData[index].taskChecked=true}
            else{
                this.arrayData[index].taskChecked=false
            }
        },
        indexdelete(posizionedaeliminare){
            this.arrayData.splice(posizionedaeliminare,1)
        },
        addObect(){
            this.arrayData.push({
                taskType: this.selected.text,
                taskChecked: false,
                taskText: this.userText,
            })
            console.log(this.arrayData);
        }
    },


})