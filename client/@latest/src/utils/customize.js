export const createDraft=()=>({contact:'',phone:'',space:'厨房',houseType:'',dimensions:{length:null,width:null,height:null},style:'现代欧式',materials:[],budget:'',deliveryDate:'',description:'',floorPlan:''})
export function validateDraft(draft){const errors=[];if(!draft.contact?.trim())errors.push('请填写联系人');if(!draft.budget)errors.push('请选择预算范围');return errors}
