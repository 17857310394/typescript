# 运行说明
将launch.json下的program字段路径修改为该目录demo文件夹下的主文件名，就可以调试不同的demo

*如：*

    "program": "${workspaceFolder}/dist/demo01_darkAttr/app.js"

修改为->

    "program": "${workspaceFolder}/dist/demo02/app.js"

**注意**
app.js是主文件名称，根据具体情况进行修改