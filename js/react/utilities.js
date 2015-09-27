var categories = ['categoría 1', 'categoría 2', 'categoría 3'];

var getFormData = function(e) {

    var data = {

      title:  e.target.form.title.value,
      description:  e.target.form.description.value,
      category:  e.target.form.category.value,
      date_publishing: e.target.form.date_publishing.value,
      date_finishing: e.target.form.date_finishing.value,
      company: e.target.form.company.value,
      address: e.target.form.address.value

    }

    return data
}