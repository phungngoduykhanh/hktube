import Button from "@/components/Button";

function MenuItem({data}){
    return <Button lefticon={data.icon} to={data.to}>{data.title}</Button>
}
 
export default MenuItem;