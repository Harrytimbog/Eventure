using Application.Core;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // Find the activity by its ID
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null) return null;
                // If the activity is null, throw an exception
                _context.Remove(activity);
                // activity.Title = request.Activity.Title ?? activity.Title;
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failure to delete the activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }

    }
}