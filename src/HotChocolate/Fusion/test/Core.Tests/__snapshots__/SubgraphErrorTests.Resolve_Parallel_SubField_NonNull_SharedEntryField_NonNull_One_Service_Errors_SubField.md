# Resolve_Parallel_SubField_NonNull_SharedEntryField_NonNull_One_Service_Errors_SubField

## Result

```json
{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "viewer"
      ],
      "extensions": {
        "code": "HC0018"
      }
    },
    {
      "message": "Unexpected Execution Error",
      "locations": [
        {
          "line": 4,
          "column": 5
        }
      ],
      "path": [
        "viewer",
        "name"
      ]
    }
  ],
  "data": null
}
```

## Request

```graphql
{
  viewer {
    userId
    name
  }
}
```

## QueryPlan Hash

```text
0728EE40A767B43E14FF62896779067DFF1C53FF
```

## QueryPlan

```json
{
  "document": "{ viewer { userId name } }",
  "rootNode": {
    "type": "Sequence",
    "nodes": [
      {
        "type": "Parallel",
        "nodes": [
          {
            "type": "Resolve",
            "subgraph": "Subgraph_1",
            "document": "query fetch_viewer_1 { viewer { name } }",
            "selectionSetId": 0
          },
          {
            "type": "Resolve",
            "subgraph": "Subgraph_2",
            "document": "query fetch_viewer_2 { viewer { userId } }",
            "selectionSetId": 0
          }
        ]
      },
      {
        "type": "Compose",
        "selectionSetIds": [
          0
        ]
      }
    ]
  }
}
```

