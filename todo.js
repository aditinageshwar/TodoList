function addtask()
{
  let txt = document.getElementById('entry').value;
  let time = document.getElementById('time').value;
  if(txt.length==0)
    alert("Please enter a task");
  else if(!time)
    alert("Please select date");
  else
  {
   document.getElementById("add").innerHTML += `<div id="wrapper">
   <span class="enterbtn"> <i class="fa fa-check-circle"></i> ${txt} on ${time}</span>
   <button class="editbtn"> <i class="fa fa-edit"></i> </button>
   <button class="deletebtn" onclick="update"> <i class="fa fa-trash"></i> </button>
   </div>`;
   document.getElementById('entry').value="";
   document.getElementById('time').value="";
 }

  //for delete
  var cur_task = document.querySelectorAll(".deletebtn");
  for(var i=0;i<cur_task.length;i++)
  {
    cur_task[i].onclick= function()
    {
      this.parentNode.remove();
    }
  }
 
  //for edit task
  var cur_task = document.querySelectorAll(".editbtn");
  for(var i=0;i<cur_task.length;i++)
    {
      cur_task[i].onclick= function()
      {
        if(document.getElementById('entry').value.length!=0 && document.getElementById('time').value)
        {
        this.parentNode.querySelector(".enterbtn").innerHTML = `<i class='fa fa-check-circle'></i> ${document.getElementById('entry').value} on ${document.getElementById('time').value}`;
        document.getElementById('entry').value="";
        document.getElementById('time').value="";
        }
      }
    }
  }