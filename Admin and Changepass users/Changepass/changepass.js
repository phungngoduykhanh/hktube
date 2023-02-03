
const API_URL = "https://63aa9d20fdc006ba6046fffd.mockapi.io";
function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }
    ).catch((err) => {
        console.log(err);
    });
};
// hàm show modal
// lấy dữ liệu tài khoản khi đăng nhập cho vào id và passlog:
var id = "1";
var passlog = "ac";


function modalchange() {
    document.getElementById('modalcontent').style.display = 'block'
    document.getElementById('modalfooter').innerHTML = `<br> 
            <button type="button" onclick="btnchange (${id})">Savechange</button>`;

};

function btnchange(_id) {
    let oldpassget = document.getElementById("oldpass").value;
    let newpassget = document.getElementById("newpass").value;
    let confirmpassget = document.getElementById("confirmpass").value;
    if (oldpassget == passlog && newpassget == confirmpassget) {
        let arraytk = {
            pass: confirmpassget
        }
        callAPI(`abc/${id}`, "PUT", arraytk).then((respense) => {
            alert("Cập nhập thành công!");
            window.location.href = "https://www.google.com/?hl=vi";
        })
    }
    if (oldpassget != passlog && newpassget == confirmpassget) {
        alert("Wrong old passworld")
    }
    if (oldpassget == passlog && newpassget != confirmpassget) {
        alert("Wrong confirm passworld")
    }
    if (oldpassget != passlog && newpassget != confirmpassget) {
        alert("Wrong old passworld and confirm pass")
    }
};



