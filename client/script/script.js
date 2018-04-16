Vue.component('data-user', {
    props: ['id','username', 'email'],
    template: `
        <tr>
            <td>{{ username }}</td>
            <td>{{ email }}</td>
            <td>
                <input type="button" value="Delete" v-on:click="deleteUser(id, username)">
            </td>
        </tr>
    `,
    methods: {
        deleteUser: function(id, username){
            if(window.confirm(`Yakin ingin menghapus username "${username}"`)){
                axios.delete(`http://localhost:3000/api/user/deleteuser/${id}`)
                .then(response => {
                    console.log('Menghapus data')
                    location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
})

Vue.component('div-task', {
    props: ['id','name'],
    template: `
    <tr>
        <td>{{ name }}</td>
        <td>

            <a style="margin-right:5px; margin-left:50px" v-on:click="checklist(id, name)"><i class="far fa-check-square"></i></a>
            <a style="margin-right:5px; margin-left:5px" v-on:click="deleteTask(id, name)"><i class="far fa-trash-alt"></i></a>
        </td>
    </tr>
    `,
    methods: {
        deleteTask: function(id, name) {
            if(window.confirm(`Yakin ingin menghapus data "${name}"?`)) {
                axios.delete(`http://localhost:3000/api/task/deletetask/${id}`)
                .then(response => {
                    console.log('Data berhasil dihapus !')
                    location.reload('/')
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }, checklist: function(id) {
            axios.get(`http://localhost:3000/api/task/checklist/${id}`)
            .then(response => {
                console.log('Task berhasil diselesaikan')
                location.reload('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})

Vue.component('div-complete', {
    props: ['id', 'name'],
    template: `
        <tr>
            <td>{{ name }}</td>
        </tr>
    `
})