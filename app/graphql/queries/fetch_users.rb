module Queries
  class FetchUsers < Queries::BaseQuery
    # this class will return a UserType array, when resolved
    type [Types::UserType], null: false

    def resolve
      User.all
    end
  end
end