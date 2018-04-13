app.controller('ProductListCtrlr', function($scope, ProductService) {
    
    $scope.products = ProductService.products
    
})