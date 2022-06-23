const app=Vue.createApp({
  
    data() {
        return {
            firstName: 'John',
            lastName: 'Stella',
            email: 'john@gmail.com',
            gender:'male',
            pic:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'

        }
    },
    methods: {
        async getUser(){
                const res = await fetch('https://randomuser.me/api')
                const { results } = await res.json()
          
                // console.log(results)
          
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.email = results[0].email
                this.gender = results[0].gender
                this.pic = results[0].picture.large
        }
    }
})


app.mount('#app')