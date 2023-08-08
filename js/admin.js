// 获取表单元素和文件列表元素
const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

// 添加表单提交事件
uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 获取选中的文件
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    // 在实际项目中，你可以使用 AJAX 或其他方式将文件上传至服务器
    // 这里只是一个示例，添加文件到文件列表
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <a href="#">${selectedFile.name}</a>
            <button class="editBtn">编辑</button>
            <button class="deleteBtn">删除</button>
            <button class="publishBtn">发布</button>
        `;
    fileList.appendChild(listItem);

    // 清空文件输入框
    fileInput.value = "";
  } else {
    console.log("请选择要上传的文件");
  }
});

// 添加编辑、删除和发布按钮的点击事件
fileList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("editBtn")) {
    // 编辑文件逻辑
    console.log("编辑文件");
  } else if (target.classList.contains("deleteBtn")) {
    // 删除文件逻辑
    target.parentElement.remove();
    console.log("删除文件");
  } else if (target.classList.contains("publishBtn")) {
    // 发布文件逻辑
    console.log("发布文件");
  }
});
