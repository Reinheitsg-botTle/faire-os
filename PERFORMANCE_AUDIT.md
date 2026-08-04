# FAIRE OS Performance Audit

## Objective

Establish a repeatable baseline before attempting performance improvements.

## Metrics

- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- JavaScript transferred
- Total page weight
- Initial request count

## Test conditions

Testing should record:

- Browser and version
- Desktop or mobile profile
- Network throttling
- CPU throttling
- Commit SHA
- Test date

## Measurement procedure

1. Record the exact route or user flow under test.
2. Use the same measurement tool and version for baseline and follow-up tests.
3. Run each test five times with identical network and CPU settings.
4. Report the median result for each metric.
5. Note failed or discarded runs and explain why they were excluded.

## Baseline

Baseline measurements have not yet been recorded.

## Acceptance criteria

A performance change should identify:

1. The measured bottleneck.
2. The relevant baseline.
3. The proposed improvement.
4. The same test after the change.
5. Any usability or maintainability tradeoff.
