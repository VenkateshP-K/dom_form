//
function foo(){
{
  var fir = document.getElementById("fname").value;
  var lna = document.getElementById("lname").value;
}
{
  var addr = document.getElementById("address").value;
  var sta = document.getElementById("state").value;
  var cty = document.getElementById("country").value;
  var pco = document.getElementById("pincode").value;
}
{
  var rio = document.querySelector('input[name="gender"]:checked');
  var rio2 = rio.value;
}
{
  var cbox = document.getElementsByName('foods');
  var cbox2 = [];
     for (var i=0;i<cbox.length;i++){
       if(cbox[i].checked == true){
         cbox2.push(cbox[i].value);
       }
     }
}
{   var bid = document.getElementById("tbd")
bid.innerHTML =`<table class="table">
<tbody>
    <td>${fir}</td>
    <td>${lna}</td>
    <td>${addr}</td>
    <td>${pco}</td>
    <td>${rio2}</td>
    <td>${cbox2}</td>
    <td>${sta}</td>
    <td>${cty}</td>
  </tbody>`
}
}

var table = document.createElement('div');
table.className = "table";

var thead = document.createElement('div');
thead.innerHTML = `<table class="table">
<thead class="thead-dark">
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Food</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
</thead>
</table>`

var tbody = document.createElement('div');
tbody.className = "scope";
tbody.id = "tbd";

table.append(thead,tbody);

//<label for="name">Name</label><br>
function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML=content
    return ele;
} 
//<br> 
function break_create(){
    var ele = document.createElement("br")
    return ele;
}
//<input type="text" id="name">
function input_create(tagname,att1name,att1value,att2name,att2value){
    var ele = document.createElement(tagname)
    ele.setAttribute(att1name,att1value)
    ele.setAttribute(att2name,att2value)
    return ele;
}
//for radio buttons
//<input type = 'radio' name = 'gender' value = 'male/female'>male/female</input>
function create_radio(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,content){
  var ele = document.createElement(tagname)
  ele.setAttribute(attrname,attrvalue)
  ele.setAttribute(attrname1,attrvalue1)
  ele.setAttribute(attrname2,attrvalue2)
  ele.innerHTML = content
  return ele;
}
var form = document.createElement("form");
form.className = "form"

//for firstname
var firstname = label_create("label","for","fname","Firstname");
var fbreak = break_create();
var finput = input_create("input","type","text","id","fname");
var f1break = break_create();

var Lastname = label_create("label","for","lname","lastname");
var lbreak = break_create();
var linput = input_create("input","type","text","id","lname");
var l1break = break_create();

var radiolabel = label_create("label","for","gender","Gender");
var radiobreak = break_create();
var ramale = label_create("label","for","gender","Male");
var radio1 = create_radio('input','type','radio','name','gender','value','male','Male');
var ra1break = break_create();
var rafemale = label_create("label","for","gender","Female")
var radio2 = create_radio('input','type','radio','name','gender','value','female','Female');
var ra2break = break_create();

var food_list = label_create("label","for","food","Choice of Food(select atleast 2)");
var fdbreak = break_create();
var food_list1 = label_create("label","for","food","Biriyani");
var food1 = create_radio('input','type','checkbox','name','foods','value','Biriyani','Biriyani');
var fd1break = break_create();
var food_list2 = label_create("label","for","food","Curd Rice");
var food2 = create_radio('input','type','checkbox','name','foods','value','Curdrice','Curdrice');
var fd2break = break_create();
var food_list3 = label_create("label","for","food","Chapathi");
var food3 = create_radio('input','type','checkbox','name','foods','value','Chapathi','Chapathi');
var fd3break = break_create();
var food_list4 = label_create("label","for","food","Dosa");
var food4 = create_radio('input','type','checkbox','name','foods','value','Dosa','Dosa');
var fd4break = break_create();
var food_list5 = label_create("label","for","food","Dessert Items");
var food5 = create_radio('input','type','checkbox','name','foods','value','Dessert','Dessert');
var fd5break = break_create();

var address = label_create("label","for","address","Address");
var adbreak1 = break_create();
var adinput = input_create("input","type","text","id","address");
var adbreak2 = break_create();

var Pincode = label_create("label","for","pincode","Pincode");
var pinbreak = break_create();
var pinput = input_create("input","type","text","id","pincode");
var pinbreak2 = break_create();

var state = label_create("label","for","state","State");
var stbreak = break_create();
var stinput = input_create("input","type","text","id","state");
var stbreak2 = break_create();

var country = label_create("label","for","country","Country");
var cobreak = break_create();
var coinput = input_create("input","type","text","id","country");
var cobreak2 = break_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.addEventListener("click",foo)
button.innerHTML = 'Submit';

form.append(firstname,fbreak,finput,f1break,Lastname,lbreak,linput,l1break,radiolabel,radiobreak,ramale,radio1,ra1break,rafemale,radio2,ra2break,food_list,fdbreak,food_list1,food1,fd1break,food_list2,food2,fd2break,food_list3,food3,fd3break,food_list4,food4,fd4break,food_list5,food5,fd5break,address,adbreak1,adinput,adbreak2,Pincode,pinbreak,pinput,pinbreak2,state,stbreak,stinput,stbreak2,country,cobreak,coinput,cobreak2,button);
document.body.append(form,table)