module Queries
  class FetchUser < Queries::BaseQuery
    # this class will return a UserType corresponding to the given ID, when resolved
    type Types::UserType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      User.find(id)
    rescue ActiveRecord::RecordNotFound => e
      GraphQL::ExecutionError.new("User doesn't exist")
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
      "#{e.record.errors.full_messages.join(', ')}")
    end
  end
end