const tree = [
	{
		id: 1,
		name: "一级 1",
		children: [
			{
				id: 4,
				name: "二级 1-1",
				children: [
					{
						id: 9,
						name: "三级 1-1-1",
					},
					{
						id: 10,
						name: "三级 1-1-2",
					},
				],
			},
			{
				id: 5,
				name: "二级 1-2",
				children: [
					{
						id: 11,
						name: "三级 1-2-1",
					},
				],
			},
		],
	},
	{
		id: 2,
		name: "一级 2",
		children: [
			{
				id: 6,
				name: "二级 2-1",
				children: [
					{
						id: 13,
						name: "三级 2-1-1",
					},
				],
			},
		],
	},
];

function getAllIdsByLevel(tree, level) {
  const ans = []

  const bfs = (node, nowLevel) => {
    if(nowLevel > level) return

    node.forEach(item => {
      ans.push(item.id)
      bfs(item.children, nowLevel + 1)
    })
    
  }

  bfs(tree, 1)
  return ans
}

let res = getAllIdsByLevel(tree, 3)
console.log(res)