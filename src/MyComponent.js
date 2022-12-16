const  MyComponent = (props) => {
  const { name, age } = props;
  return (
    <>
      <div>{name}입니다</div>
      <div>{age}입니다</div>
    </>
  )
}

MyComponent.defaultProps = {
  name: '기본 이름 세팅해보',
  age: 0
}

export default MyComponent;