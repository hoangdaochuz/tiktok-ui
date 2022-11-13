import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {publicRouters} from '~/routers'
import DefaultLayout from '~/layouts'
import {Fragment} from 'react'

function App() {
  //Test(7)
  return (
    <Router>
      <div className="App">
          <Routes>
            {
              publicRouters.map((router, index)=>{
                const Page = router.component
                let Layout = DefaultLayout
                if(router.layout){
                  Layout = router.layout
                }else if(router.layout=== null){
                  Layout = Fragment
                }
                return <Route key={index} path={router.path} element={
                <Layout>
                  <Page/>
                </Layout>
              }/>
              })
            }
          </Routes>
      </div>
    </Router>
  );
}
export default App;
