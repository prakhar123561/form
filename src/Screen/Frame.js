import Button1 from '../components/button/Variant1'
import Button2 from '../components/button/Variant2'
import Button3 from '../components/button/Variant3'
import CheckBox1 from '../components/desktop/Default'
import Screen from '../components/Home/Default'
export default function Frame() {

  const form = () =>{
    return(
      <div style={{height:'700px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div class="card" style={{width: '400px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '5px', textAlign: 'center', padding:'10px'}}>
          <div class="header" style={{backgroundColor: '#fff', padding: '10px', fontSize: '40px'}}>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row'}}>
              <Screen border={'none'} text={'All Pages'} height={'30px'} />
            </div>
            <hr></hr>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row'}}>
              <Screen border={'none'} text={'Page1'} height={'30px'}/>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row'}}>
              <Screen border={'none'} text={'Page2'} height={'30px'}/>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row'}}>
              <Screen border={'none'} text={'Page3'} height={'30px'}/>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexDirection:'row'}}>
              <Screen border={'none'} text={'Page4'} height={'30px'}/>
            </div>
            <hr></hr>
          <div class="container" style={{display:'flex', justifyContent: 'space-between', alignItems:'center', padding:'10px'}}>
            <Button1/>
          </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    form()
  )
}