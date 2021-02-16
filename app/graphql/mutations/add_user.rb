module Mutations
  class AddUser < BaseMutation
    argument :username, String , required: true
    argument :password, String , required: true

    type Types::UserType
    def resolve(username:, password:)
      # user_params = Hash params

      # begin
      user = User.create!(username: username, password: password)

      # rescue ActiveRecord::RecordInvalid => e
      #   GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
      #   "#{e.record.errors.full_messages.join(', ')}")
      # end
      user
    end
  end
end