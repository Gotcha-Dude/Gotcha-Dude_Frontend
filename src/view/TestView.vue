<template>
<div>
  <h3>TestView</h3>
  <div>
    <input v-model="inputData">
    <div>
      <button type="button" @click="send">Send</button>
    </div>

    <div>
      <p>InputData : {{this.getData}}</p>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "TestView",
  components:{},
  data(){
    return{
      inputData: "",
      getData: "",
    }
  },
  inject:['$http'],
  methods:{
    send(){
      console.log("inputData : " + this.inputData);
      this.$http.post("/testapi", this.inputData).then((res) =>{
        console.log(res.data);
        this.getData = res.data;
      }).catch((err) => {
        console.log(err);
      });
    }

  },
  mounted() {
  }
};
</script>

<style>

</style>