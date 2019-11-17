angular.module('app').controller('LabController', [
    function () {
        var vm = this;
        vm.show = show;
        vm.author = [{name: "Mark Twain",nationality: "American", date:"1835-1910"},
                    {name: "A.A. Milne",nationality: "English", date:"1882-1956"},
                    {name: "Ernest Hemingway",nationality: "American", date:"1899-1961"},
                    {name: "Charles Dickens",nationality: "English", date:"1812-1870"},
                    {name: "Jane Austen",nationality: "English", date:"1775-1817"},
                    {name: "Leo Tolstoy",nationality: "Russian", date:"1775-1817"}]
        
        function show(person) {
            
            return  alert('Show details for:  ' + person.name);
        }
        
    }
       
    
]);