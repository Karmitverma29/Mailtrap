import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Price from './price'
import Price2 from "./price2";
function Tabes(){
 return <div><Tabs align="center" variant='enclosed'>
  <TabList>
    <Tab _active={{borderTop:"2px solid #495057"}}  >Email Sandbox</Tab>
    <Tab _active={{borderTop:"2px solid #495057"}} >Email API</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
<Price/>
    </TabPanel>
    <TabPanel>
<Price2/>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>

}
export default Tabes