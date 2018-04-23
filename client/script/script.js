Vue.component('div-task', {
    props: ['id','name', 'description'],
    template: `
        <li>
            <div class="date">
                
            </div>
            <h1>{{ name }}</h1>
            <h3>{{ description }}</h3>
            <p>Date : </p>
            <div class="action-button">
                <button class="btn btn-primary btn-sm" v-on:click="checklist(id, name)">Done</button>
                <button class="btn btn-warning btn-sm" v-on:click="">Edit</button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteTask(id, name)">Delete</button>
            </div>
            <div class="clear"></div>
        </li>
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
            let token = localStorage.getItem('token')
            console.log('masuk fungsi checklist')
            console.log('token => ', token)
            console.log('ini ID ==',id)

            axios.post(`http://localhost:3000/api/task/checklist/${id}`)
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

Vue.component('div-completeTask', {
    props: ['id', 'cname'],
    template: `
    <li>
        <button class="done-botton" v-on:click="checklist(id, cname)"><i class="far fa-check-circle"></i></button>
        <h5>{{ cname }}</h5>
        <div class="action-button">
            <button>Edit</button>
            <button v-on:click="deleteTask(id, cname)">Delete</button>
        </div>
        <div class="clear"></div>
    </li>
    `
})




{/* <tr>
<td>{{ name }}</td>
<td>
    <a style="margin-right:5px; margin-left:50px" v-on:click="checklist(id, name)"><i class="far fa-check-square"></i></a>
    <a style="margin-right:5px; margin-left:5px" v-on:click="deleteTask(id, name)"><i class="far fa-trash-alt"></i></a>
</td>
</tr> */}