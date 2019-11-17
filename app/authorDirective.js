angular.module('app').directive('author',[
function(){
  return {
    restrict: 'E',
    scope: {
      author: '=',
      action: '&',
    },
    template: '<table class="table">' +
                '<thead class="thead-dark">' + 
                  '<tr>'+
                    '<th scope="col">Name</th>' +
                    '<th scope="col">Nationality</th>'+ 
                    '<th scope="col">Date</th>'+
                  '</tr>'+
                '</thead>'+
              '<tbody>'+
                  '<tr ng-repeat="person in author">'+
                    '<td>{{person.name}}</td>'+
                    '<td>{{person.nationality}}</td>'+
                    '<td>{{person.date}}</td>'+
                    '<td><input type="button"' + 
                    'ng-click="action({person: person})"  value="Detail" class="btn btn-primary"></td>'+
                  '</tr>'+
                '</tbody>'+
                '</table>'+
                '<pre> {{author | json}}</pre>'

  }
}
]);