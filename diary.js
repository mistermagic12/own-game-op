class Diary{
constructor(){
this.dateElement=createElement("h2")
this.diaryInput=createInput('')
this.save=createButton("SAVE")
this.clear=createButton("CLEAR")
this.showPrevious=createButton("SHOW PREVIOUS")
this.inp=('')
}
display(){
clear()
this.dateElement.position(200,100)
this.diaryInput.position(200,150)
this.diaryInput.size(400,200)
var Input1=this.diaryInput.value()
this.save.position(600,440)
this.clear.position(150,440)
this.showPrevious.position(340,440)
this.date=Date()
this.todayDate=(this.date.slice(0,16))
this.dateElement=createElement('h2',this.todayDate)
this.dateElement.position(200,100)

this.save.mousePressed(
function(){
var diaryInfo=database.ref('/').update({
'date':this.todayDate,
'text':this.diaryInput
})

}
)
}

}