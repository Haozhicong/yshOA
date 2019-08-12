<template>
  <div>
    <!-- 面包屑 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>生产管理</el-breadcrumb-item>
        <el-breadcrumb-item>生产计划</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 表格操作 -->
    <div class="container">
      <div class="btn_tools">
        <el-row>
          <el-button @click="dialogVisible = true" type="success">新建计划</el-button>
          <el-button type="danger">删除计划</el-button>
          <el-button type="primary">成功确定</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
        </el-row>
      </div>
      <div class="table_data">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="orderId" label="订单编号"></el-table-column>
          <el-table-column prop="pName" label="品名及规格"></el-table-column>
          <el-table-column prop="pColor" label="颜色"></el-table-column>
          <el-table-column prop="pRope" label="配绳"></el-table-column>
          <el-table-column prop="pPacking" label="包装方式"></el-table-column>
          <el-table-column prop="pNumber" label="每件装箱量(只)"></el-table-column>
          <el-table-column prop="pAllCounts" label="总数量(只)"></el-table-column>
          <el-table-column prop="date" label="交货时间"></el-table-column>
          <el-table-column prop="Aname" label="负责人"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 新建生产计划弹出框 -->
    <el-dialog title="新建生产计划单" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="订单编号">
          <el-input v-model="form.orderId"></el-input>
        </el-form-item>
        <el-form-item label="品名规格">
          <el-input v-model="form.pName"></el-input>
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="form.pColor"></el-input>
        </el-form-item>
        <el-form-item label="配绳">
          <el-input v-model="form.pRope"></el-input>
        </el-form-item>
        <el-form-item label="包装方式">
          <el-input v-model="form.pPacking"></el-input>
        </el-form-item>
        <el-form-item label="每件装箱子量">
          <el-input v-model="form.pNumber"></el-input>
        </el-form-item>
        <el-form-item label="总数量">
          <el-input v-model="form.pAllCounts"></el-input>
        </el-form-item>
        <el-form-item label="交货时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="form.Aname"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          orderId: "A00001",
          pName: "标准浴求",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          pColor: "西瓜红配白",
          pRope: "绳子",
          pPacking: "箱子",
          pNumber: "500",
          pAllCounts: "20000",
          date: "2019-08-03",
          Aname: "icon"
        },
        {
          orderId: "A00002",
          pName: "标准浴求",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          pColor: "西瓜红配白",
          pRope: "绳子",
          pPacking: "箱子",
          pNumber: "500",
          pAllCounts: "20000",
          date: "2019-08-03",
          Aname: "icon"
        }
      ],
      orderbh: "请输入订单编号",
      dialogVisible: false,
      form: {
        orderId: "",
        pName: "",
        pColor: "",
        pRope: "",
        pPacking: "",
        pNumber: "",
        pAllCounts: "",
        date: "",
        Aname: ""
      }
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    // 新建计划
    newPlanTure() {
      this.dialogVisible = false;
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 8px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn_tools {
  margin-bottom: 15px;
}
.ipnut_search {
  display: inline-block;
  width: 140px;
  margin-left: 10px;
}
</style>