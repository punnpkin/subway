/*
 * 2016.11.24 nevil
 */
dijkstra = function () {
	function addEdge(origin,target,distance){
		if(!(origin in chart)) chart[origin]={};
		if(!(target in chart)) chart[target]={};
		chart[origin][target] = distance,
		chart[target][origin] = distance
	}
	function addChart(chart) {
		for (var i = 0; i < chart.length; ++i) {
			var edge = chart[i];
			addEdge(edge[0],edge[1],edge[2])
		};
	}
	function shortest(origin,target){
		if (!(origin in chart)||!(target in chart)) return 1 / 0;
		var dist = {};
			visited = {};
			numVertex = 0;
		for (var v in chart) dist[v] = 1 / 0,
			numVertex++;
		dist[origin] = 0;
		for (var i = 0; i < numVertex; ++i) {
			var minDist = 1 / 0,
				minV = void 0;
			for (var v in dist) if (!(v in visited)){
				if(minDist > dist[v]) minDist = dist[v],
					minV = v
			}else;
			if (void 0 === minV) break;
			if (minV === target) return minDist;
			visited[minV] = true;
			var edges = chart[minV];
			for (var v in edges) if (!(v in visited)){
				var newDist = minDist + edges[v];
				if (dist[v] > newDist) dist[v] = newDist
			}else;
		}
		return 1 / 0
	}
	var chart = {};
	return{
		addEdge: addEdge,
		addChart: addChart,
		shortest: shortest
	}
}();
