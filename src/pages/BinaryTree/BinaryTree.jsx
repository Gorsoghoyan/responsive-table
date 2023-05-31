
const treeData = [
  {
    id: 1,
    title: "Cars",
    children: [
      {
        id: 2,
        title: "Mercedes",
        children: [
          {
            id: 3,
            title: "E63 AMG"
          }
        ]
      },
      {
        id: 4,
        title: "BMW",
        children: [
          {
            id: 5,
            title: "E60 M5"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Phones",
    children: [
      {
        id: 7,
        title: "Apple",
        children: [
          {
            id: 8,
            title: "Iphone 14 pro"
          },
          {
            id: 9,
            title: "Iphone 13 pro"
          },
        ]
      },
      {
        id: 10,
        title: "Samsung",
        children: [
          {
            id: 11,
            title: "Galaxy 14"
          },
          {
            id: 12,
            title: "Galaxy 24 Ultra"
          },
        ]
      },
    ]
  },
  {
    id: 13,
    title: "Jobs"
  }
];

export default function BinaryTree({ data = treeData }) {
  return (
    <div style={{ color: "white", margin: 40 }}>
      {data.map(parent => (
        <div key={parent.id}>
          {parent.title}
          {parent.children && <BinaryTree data={parent.children}  />}
        </div>
      ))}
    </div>
  );
}