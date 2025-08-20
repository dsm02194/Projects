// let h2 = React.createElement('h2',{className: "first"}, "Hello world");

// let root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)

// // .....................................

// let h3 = React.createElement('h3',{className: 'second'}, 'SHUBHAM')

// let root2 = ReactDOM.createRoot(document.querySelector("#root2"))

// root2.render(h3)


const Container = React.createElement("div", { className: 'Container' }, [
    React.createElement("div", {key:1}, (React.createElement("h3", {}, "Shubham Mandal")) )
])

let root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(Container)


let a = <h1>hello</h1>

let root2 =  ReactDOM.createRoot(document.querySelector('#root2'))

root2.render(a)