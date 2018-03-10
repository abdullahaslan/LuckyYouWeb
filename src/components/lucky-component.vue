<template>
  <div class="luckyYou container">
    <h1>Welcome to the luckyYou</h1>
    <h4>Register company. Your addres will be registered</h4>
    <button v-on:click="register">Register</button>

     Congragulations, {{registerCompanyResult}}

</hr>

    <h4>Load Balance : Min 1 ether</h4>
    
    Amount to load: <input v-model="amount" placeholder="0 Ether">
        <button v-on:click="loadBalance">Load Balance</button>
        Congragulations, your balance {{loadBalanceResult}}

    </hr>


    
    <img v-if="pending" id="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
    <div class="event" v-if="winEvent">
      <p v-if="winEvent._status" id="has-won"><i aria-hidden="true" class="fa fa-check"></i> 
       Congragulations, you have won {{winEvent._amount}} wei
      </p>
      <p v-else id="has-lost"><i aria-hidden="true" class="fa fa-times"></i> Sorry you lost, try again.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'luckyYou',
  data () {
    return {
      amount: null,
      pending: false,
      winEvent: null,
      registerCompanyResult:null,
      loadBalanceResult:null
    }
  },
  methods: {
    register () {
      console.log('RegisterCompany ', this.$store.state.web3.coinbase)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().registerCompany( {
        gas: 300000,
        value: 0,
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          registerCompanyResult = "You registered your company successfully"
        }
      })
    },
    loadBalance (event) {
      console.log('LOAD BALANCE, AMOUNT', this.amount)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().loadBalanceToCompany(this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'), {
        gas: 300000,
        value: 0,
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
            this.loadBalanceResult = result.args
            
            this.pending = false

        }
      })
    },






  },
  mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  }
}
</script>

<style scoped>
.luckyYou {
     margin-top: 50px;
     text-align:center;
}
#loader {
  width:150px;
}
ul {
    margin: 25px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap:25px;
    grid-row-gap:25px;
}
li{
    padding: 20px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color:#fff;
    border: -2px solid #bf0d9b;
    color: #bf0d9b;
    box-shadow:3px 5px #bf0d9b;
}
li:hover{
    background-color:#bf0d9b;
    color:white;
    box-shadow:0px 0px #bf0d9b;
}
li:active{
    opacity: 0.7;
}
*{
   color: #444444;
}
#has-won {
  color: green;
}
#has-lost {
  color:red;
}
</style>