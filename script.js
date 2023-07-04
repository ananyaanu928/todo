document.querySelector('#button').onclick = function(){
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#taskList').innerHTML += `
            <div class="taskhidden">
                <span id="taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                <i class="fa fa-trash" style="font-size:30px;color:#164b60"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}