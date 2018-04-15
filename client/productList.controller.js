app.controller('ProductListCtrlr', function($scope, ProductService) {
 
    $scope.products = ProductService.products
    $scope.productsCopy = angular.copy($scope.products)//ProductService.products
    $scope.edit = function(ID) {
        ProductService.editProduct(ID)
        $scope.ids = ProductService.beingEditedIds
    }

    //when we cancel we want to reset products to productsCopy
    $scope.cancel = function(ID){
        ProductService.cancelEditing(ID)
        $scope.products = angular.copy($scope.productsCopy)//

    }
    $scope.same = true

    $scope.compare = (ID) => {
        $scope.same =
            ($scope.products[ID-1].name === $scope.productsCopy[ID-1].name)
        console.log($scope.products[ID - 1].name)
        console.log($scope.productsCopy[ID - 1].name)//shouldnt change
        // console.log($scope.products[ID - 1].name == $scope.productsCopy[ID - 1].name)
    }
    

    //to save the value and set them to equal
    $scope.update = () => {
        $scope.productsCopy = angular.copy($scope.products)
        // $scope.same = true
    }

    $scope.closeboxes = () => {
        ProductService.closeEdits()
        $scope.products = angular.copy($scope.productsCopy)//
        $scope.same = true

    }
})
