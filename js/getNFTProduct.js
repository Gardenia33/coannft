const ip = 'localhost';
var productName = [];
var description = [];
var price = [];
var category;
var company = [];
var imageUrl = [];
var turnover = [];

document.addEventListener("DOMContentLoaded",()=>{
getData();
//location.reload();
})
function getData(){
    $.ajax({
        "url": 'http://'+ ip +':8080/normalproperty/showNFTproduct',
        "method": "GET",
        "data": {

        },
    })
    .done(function(response){
        console.log(response)

        var loop = Math.floor((response.data.length)/5);
        for(var j = 0;j<loop+1;j++){
            for(var i = j*5;i<response.data.length&&i<(j+1)*5;i++){
                productName.push(response.data[i].name)
                description.push(response.data[i].description)
                price.push(response.data[i].price)
                company.push(response.data[i].company)
                imageUrl.push(response.data[i].imageUrl)
                turnover.push(response.data[i].turnover)
                addElement(i,j);
            }
        }
    })
    .fail(function(jqXHR){
        console.log(jqXHR);
    })
}

function addElement(i,j){
    document.getElementById('targe'+j).innerHTML += 
    "<div class=\"w-auto\"> \
        <div class=\"card\"> \
            <div class=\"card-header\"> \
                <span class=\"number\">成交量"+ turnover[i] +"份</span> \
                <img class=\"w-100\" src=\"http://"+imageUrl[i]+"\" alt=\"\" /> \
                <a class=\"buy-btn\" href=\"GameAssetDetail.html\">现在购买</a> \
            </div> \
            <div class=\"card-body\"> \
                <div class=\"card-title\"> \
                    <span>"+productName[i]+"</span> \
                    <img src=\"img/img_2.png\" alt=\"\" /> \
                </div> \
                <p class=\"card-number\">"+i+"</p> \
                <p class=\"card-price\">¥"+price[i]+" <small>起</small></p> \
            </div> \
        </div> \
    </div>"
}
