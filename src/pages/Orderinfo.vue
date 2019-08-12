<template>
  <div>
    <!-- 面包屑 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>生产管理</el-breadcrumb-item>
        <el-breadcrumb-item>生产计划列表</el-breadcrumb-item>
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
          <el-table-column prop="orderTime" label="下单时间"></el-table-column>
          <el-table-column prop="deliveryTime" label="交货时间"></el-table-column>
          <el-table-column prop="address" label="收货地址"></el-table-column>
          <el-table-column prop="state" label="状态">
            <template slot-scope="scope">
              <span v-if="scope.row.state == 1">
                <el-tag type="">生产计划</el-tag>
              </span>
              <span v-if="scope.row.state == 2">
                <el-tag type="warning">拉网</el-tag>
              </span>
              <span v-if="scope.row.state == 3">
                <el-tag type="danger">烫绳</el-tag>
              </span>
              <span v-if="scope.row.state == 4">
                <el-tag type="info">剪料</el-tag>
              </span>
              <span v-if="scope.row.state == 5">
                <el-tag type="danger">制球车间</el-tag>
              </span>
              <span v-if="scope.row.state == 6">
                <el-tag type="danger">外发工厂</el-tag>
              </span>
              <span v-if="scope.row.state == 7">
                <el-tag type="success">包装车间</el-tag>
              </span>
            </template>
          </el-table-column>
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
    <el-dialog title="新建订单信息" :visible.sync="dialogVisible" width="60%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="订单编号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="下单时间">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交货时间">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
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
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 1
        },
        {
          orderId: "A00002",
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 1
        },
        {
          orderId: "A00003",
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 1
        },
        {
          orderId: "A00004",
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 1
        },
        {
          orderId: "A00005",
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 2
        },
        {
          orderId: "A00006",
          orderTime: "2016-05-03",
          deliveryTime: "2016-06-03",
          address: "上海市普陀区金沙江路1518弄",
          state: 3
        }
      ],
      orderbh: "请输入订单编号",
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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